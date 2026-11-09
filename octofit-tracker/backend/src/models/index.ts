import mongoose, { Schema, Types, model } from 'mongoose';

export interface UserRecord {
  username: string;
  email: string;
  displayName: string;
}

export interface TeamRecord {
  name: string;
  description: string;
  members: Types.ObjectId[];
}

export interface ActivityRecord {
  user: Types.ObjectId;
  type: 'running' | 'cycling' | 'walking' | 'swimming' | 'other';
  durationMinutes: number;
  distanceKm: number;
  performedAt: Date;
}

export interface LeaderboardRecord {
  user: Types.ObjectId;
  period: 'weekly' | 'monthly' | 'all-time';
  points: number;
}

export interface WorkoutRecord {
  title: string;
  description: string;
  category: string;
  durationMinutes: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const userSchema = new Schema<UserRecord>(
  {
    username: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    displayName: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

const teamSchema = new Schema<TeamRecord>(
  {
    name: { type: String, required: true, trim: true, unique: true },
    description: { type: String, default: '' },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true },
);

const activitySchema = new Schema<ActivityRecord>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: {
      type: String,
      enum: ['running', 'cycling', 'walking', 'swimming', 'other'],
      required: true,
    },
    durationMinutes: { type: Number, min: 1, required: true },
    distanceKm: { type: Number, min: 0, default: 0 },
    performedAt: { type: Date, default: Date.now, required: true },
  },
  { timestamps: true },
);

const leaderboardSchema = new Schema<LeaderboardRecord>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    period: {
      type: String,
      enum: ['weekly', 'monthly', 'all-time'],
      required: true,
    },
    points: { type: Number, min: 0, default: 0, required: true },
  },
  { timestamps: true },
);
leaderboardSchema.index({ user: 1, period: 1 }, { unique: true });

const workoutSchema = new Schema<WorkoutRecord>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    category: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, min: 1, required: true },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
    },
  },
  { timestamps: true },
);

export const User = mongoose.models.User ?? model<UserRecord>('User', userSchema);
export const Team = mongoose.models.Team ?? model<TeamRecord>('Team', teamSchema);
export const Activity =
  mongoose.models.Activity ?? model<ActivityRecord>('Activity', activitySchema);
export const Leaderboard =
  mongoose.models.Leaderboard ??
  model<LeaderboardRecord>('Leaderboard', leaderboardSchema);
export const Workout =
  mongoose.models.Workout ?? model<WorkoutRecord>('Workout', workoutSchema);
