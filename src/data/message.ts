export interface messageData {
  id: string;
  user_id: string;
  message: string;
  created_at: Date;
  is_approved: boolean;
  name?: string;
}
