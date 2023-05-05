import "dotenv/config";

export const DB_URI = process.env.DB_URI as string;
export const PORT = (process.env.PORT as string) || 5000;
export const JWT_SECRET = process.env.JWT_SECRET as string;
