import { ElementType } from 'react';

import { ReactComponent as ScheduleIcon } from 'svg/schedule.svg';
import { ReactComponent as AnalyticsIcon } from 'svg/analytics.svg';
import { ReactComponent as StoriesIcon } from 'svg/stories.svg';
import { ReactComponent as EngagementUnitsIcon } from 'svg/engagement-units.svg';
import { ReactComponent as AdsIcon } from 'svg/ads.svg';
import { ReactComponent as CMSUsersIcon } from 'svg/cms-users.svg';
import { ReactComponent as RolesIcon } from 'svg/roles.svg';
import { ReactComponent as AppsIcon } from 'svg/apps.svg';
import { ReactComponent as UserGuideIcon } from 'svg/user-guide.svg';

export interface NavigationItem {
  key: string;
  href: string;
  icon: ElementType;
  title: string;
}

export interface NavigationGroup {
  key: string;
  items: NavigationItem[];
}

export const NAVIGATION_CONFIG: NavigationGroup[] = [
  {
    key: 'main',
    items: [
      {
        key: 'schedule',
        href: '/schedule',
        icon: ScheduleIcon,
        title: 'Schedule',
      },
      {
        key: 'analytics',
        href: '/analytics',
        icon: AnalyticsIcon,
        title: 'Analytics',
      },
      {
        key: 'stories',
        href: '/stories',
        icon: StoriesIcon,
        title: 'Stories',
      },
      {
        key: 'engagement-units',
        href: '/engagement-units',
        icon: EngagementUnitsIcon,
        title: 'Engagement Units',
      },
      {
        key: 'ads',
        href: '/ads',
        icon: AdsIcon,
        title: 'Ads',
      },
    ],
  },
  {
    key: 'users',
    items: [
      {
        key: 'cms-users',
        href: '/cms-users',
        icon: CMSUsersIcon,
        title: 'CMS Users',
      },
      {
        key: 'roles',
        href: '/roles',
        icon: RolesIcon,
        title: 'Roles',
      },
      {
        key: 'apps',
        href: '/apps',
        icon: AppsIcon,
        title: 'Apps',
      },
    ],
  },
  {
    key: 'guide',
    items: [
      {
        key: 'user-guide',
        href: '/guide',
        icon: UserGuideIcon,
        title: 'User Guide',
      },
    ],
  },
];
