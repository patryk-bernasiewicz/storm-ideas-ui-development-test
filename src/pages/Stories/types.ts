import { Action } from 'components/DataTable/types';
import Status from 'components/Status/Status';

export interface StoryModel {
  id: number;
  title: string;
  pages: string;
  lastModified: Date;
  status: keyof typeof Status;
  liveFrom: Date;
  ends: Date;
  actions: Action;
}
