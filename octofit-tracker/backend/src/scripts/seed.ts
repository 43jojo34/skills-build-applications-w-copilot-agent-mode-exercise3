import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

const connectionString =
  process.env.MONGODB_URI ?? 'mongodb://localhost:27017/octofit_db';

const users = [
  { username: 'alex-runner', email: 'alex@example.com', displayName: 'Alex Morgan' },
  { username: 'sam-cyclist', email: 'sam@example.com', displayName: 'Sam Rivera' },
  { username: 'jordan-swims', email: 'jordan@example.com', displayName: 'Jordan Lee' },
  { username: 'taylor-walks', email: 'taylor@example.com', displayName: 'Taylor Kim' },
  { username: 'casey-fit', email: 'casey@example.com', displayName: 'Casey Patel' },
];

/**
 * Seed octofit_db with representative test data for users, teams, activities,
 * leaderboard entries, and workouts.
 */
async function seedDatabase(): Promise<void> {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    const userIds = new Map<string, mongoose.Types.ObjectId>();
    for (const user of users) {
      const savedUser = await User.findOneAndUpdate(
        { username: user.username },
        { $set: user },
        { upsert: true, returnDocument: 'after', runValidators: true },
      );
      userIds.set(user.username, savedUser._id);
    }

    const teamSeeds = [
      {
        name: 'Trail Blazers',
        description: 'A team for runners and outdoor explorers.',
        members: ['alex-runner', 'taylor-walks', 'casey-fit'],
      },
      {
        name: 'Peak Performers',
        description: 'Building strength, stamina, and consistency together.',
        members: ['sam-cyclist', 'jordan-swims', 'casey-fit'],
      },
    ];
    for (const team of teamSeeds) {
      await Team.findOneAndUpdate(
        { name: team.name },
        {
          $set: {
            name: team.name,
            description: team.description,
            members: team.members.map((username) => userIds.get(username)),
          },
        },
        { upsert: true, returnDocument: 'after', runValidators: true },
      );
    }

    const today = new Date();
    today.setUTCHours(12, 0, 0, 0);
    const activitySeeds = [
      { username: 'alex-runner', type: 'running' as const, durationMinutes: 32, distanceKm: 5.2 },
      { username: 'sam-cyclist', type: 'cycling' as const, durationMinutes: 48, distanceKm: 18.4 },
      { username: 'jordan-swims', type: 'swimming' as const, durationMinutes: 35, distanceKm: 1.5 },
      { username: 'taylor-walks', type: 'walking' as const, durationMinutes: 42, distanceKm: 3.8 },
      { username: 'casey-fit', type: 'running' as const, durationMinutes: 28, distanceKm: 4.1 },
    ];
    for (const [index, activity] of activitySeeds.entries()) {
      const performedAt = new Date(today);
      performedAt.setUTCDate(performedAt.getUTCDate() - index);
      const user = userIds.get(activity.username);
      if (!user) {
        throw new Error(`Missing seeded user: ${activity.username}`);
      }

      await Activity.findOneAndUpdate(
        { user, performedAt },
        {
          $set: {
            user,
            type: activity.type,
            durationMinutes: activity.durationMinutes,
            distanceKm: activity.distanceKm,
            performedAt,
          },
        },
        { upsert: true, returnDocument: 'after', runValidators: true },
      );
    }

    const leaderboardSeeds = [
      { username: 'alex-runner', points: 320 },
      { username: 'sam-cyclist', points: 285 },
      { username: 'jordan-swims', points: 260 },
      { username: 'taylor-walks', points: 225 },
      { username: 'casey-fit', points: 210 },
    ];
    for (const entry of leaderboardSeeds) {
      const user = userIds.get(entry.username);
      if (!user) {
        throw new Error(`Missing seeded user: ${entry.username}`);
      }
      await Leaderboard.findOneAndUpdate(
        { user, period: 'weekly' },
        { $set: { user, period: 'weekly', points: entry.points } },
        { upsert: true, returnDocument: 'after', runValidators: true },
      );
    }

    const workoutSeeds = [
      {
        title: 'Easy 5K Run',
        description: 'A relaxed run focused on building an aerobic base.',
        category: 'Running',
        durationMinutes: 30,
        difficulty: 'beginner' as const,
      },
      {
        title: 'Full Body Strength',
        description: 'A balanced bodyweight strength session.',
        category: 'Strength',
        durationMinutes: 35,
        difficulty: 'intermediate' as const,
      },
      {
        title: 'Recovery Walk',
        description: 'A gentle walk to support active recovery.',
        category: 'Walking',
        durationMinutes: 25,
        difficulty: 'beginner' as const,
      },
      {
        title: 'Cycling Intervals',
        description: 'Short cycling intervals with recovery between efforts.',
        category: 'Cycling',
        durationMinutes: 40,
        difficulty: 'advanced' as const,
      },
      {
        title: 'Pool Endurance',
        description: 'Steady swimming to improve endurance and technique.',
        category: 'Swimming',
        durationMinutes: 30,
        difficulty: 'intermediate' as const,
      },
    ];
    for (const workout of workoutSeeds) {
      await Workout.findOneAndUpdate(
        { title: workout.title },
        { $set: workout },
        { upsert: true, returnDocument: 'after', runValidators: true },
      );
    }

    const counts = await Promise.all([
      User.countDocuments(),
      Team.countDocuments(),
      Activity.countDocuments(),
      Leaderboard.countDocuments(),
      Workout.countDocuments(),
    ]);
    console.log(
      `Database seeding complete: ${counts[0]} users, ${counts[1]} teams, ${counts[2]} activities, ${counts[3]} leaderboard entries, ${counts[4]} workouts.`,
    );
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

await seedDatabase();
