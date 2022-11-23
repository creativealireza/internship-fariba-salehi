import {useIntl} from 'react-intl'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      <MenuInnerWithSub
        title={intl.formatMessage({id: 'MENU.CRAFTED'})}
        to='/crafted'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        {/* PAGES */}
        <MenuInnerWithSub
          title={intl.formatMessage({id: 'MENU.PAGES'})}
          to='/crafted/pages'
          fontIcon='bi-archive'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuInnerWithSub
            title={intl.formatMessage({id: 'PAGES.PROFILE'})}
            to='/crafted/pages/profile'
            hasArrow={true}
            menuPlacement='right-start'
            menuTrigger={`{default:'click', lg: 'hover'}`}
          >
            <MenuItem to='/crafted/pages/profile/overview' title={intl.formatMessage({id: 'PROFILE.OVERVIEW'})} hasBullet={true} />
            <MenuItem to='/crafted/pages/profile/campaigns' title={intl.formatMessage({id: 'PROFILE.CAMPAIGNS'})} hasBullet={true} />
          </MenuInnerWithSub>
        </MenuInnerWithSub>

        {/* ACCOUNT */}
        <MenuInnerWithSub
          title={intl.formatMessage({id: 'MENU.ACCOUNTS'})}
          to='/crafted/accounts'
          fontIcon='bi-person'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/crafted/account/overview' title={intl.formatMessage({id: 'ACCOUNTS.OVERVIEW'})} hasBullet={true} />
          <MenuItem to='/crafted/account/settings' title={intl.formatMessage({id: 'ACCOUNTS.SETTINGS'})} hasBullet={true} />
        </MenuInnerWithSub>

        {/* Widgets */}
        <MenuInnerWithSub
          title={intl.formatMessage({id: 'MENU.WIDGETS'})}
          to='/crafted/widgets'
          fontIcon='bi-layers'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/crafted/widgets/lists' title={intl.formatMessage({id: 'WIDGET.LISTS'})} hasBullet={true} />
          <MenuItem to='/crafted/widgets/statistics' title={intl.formatMessage({id: 'WIDGET.STATISTICS'})} hasBullet={true} />
          <MenuItem to='/crafted/widgets/charts' title={intl.formatMessage({id: 'WIDGET.CHARTS'})} hasBullet={true} />
          <MenuItem to='/crafted/widgets/mixed' title={intl.formatMessage({id: 'WIDGET.MIXED'})} hasBullet={true} />
        </MenuInnerWithSub>
      </MenuInnerWithSub>

      <MenuInnerWithSub title={intl.formatMessage({id: 'MENU.APPS'})} to='/apps' menuPlacement='bottom-start' menuTrigger='click'>
        {/* PAGES */}
        <MenuItem
          icon='/media/icons/duotune/general/gen051.svg'
          to='/apps/user-management/users'
          title={intl.formatMessage({id: 'USER.USERMANAGEMENT'})}
        />
      </MenuInnerWithSub>

    </>
  )
}
