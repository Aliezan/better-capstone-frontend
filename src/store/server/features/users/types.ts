export interface User {
  id: number;
  name: string;
  email: string;
  block_status: boolean;
  mute_duration: string;
  mute_status: boolean;
  online_status: boolean;
  img_url: string;
}

export interface MutationParams {
  id: string;
  duration: string;
}
