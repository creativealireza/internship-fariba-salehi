/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-4 ls-1'>{intl.formatMessage({id: 'MENU.CRAFTED'})}</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/crafted/pages'
        title={intl.formatMessage({id: 'MENU.PAGES'})}
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <SidebarMenuItemWithSub
            to='/crafted/pages/profile'
            title={intl.formatMessage({id: 'PAGES.PROFILE'})}
            hasBullet={true}>
          <SidebarMenuItem
            to='/crafted/pages/profile/overview'
            title={intl.formatMessage({id: 'PROFILE.OVERVIEW'})}
            hasBullet={true} />
          <SidebarMenuItem
            to='/crafted/pages/profile/campaigns'
            title={intl.formatMessage({id: 'PROFILE.CAMPAIGNS'})}
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>

      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/crafted/accounts'
        title={intl.formatMessage({id: 'MENU.ACCOUNTS'})}
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <SidebarMenuItem 
          to='/crafted/account/overview' 
          title={intl.formatMessage({id: 'ACCOUNTS.OVERVIEW'})} 
          hasBullet={true} />
        <SidebarMenuItem 
          to='/crafted/account/settings' 
          title={intl.formatMessage({id: 'ACCOUNTS.SETTINGS'})} 
          hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/crafted/widgets'
        title={intl.formatMessage({id: 'MENU.WIDGETS'})}
        icon='/media/icons/duotune/general/gen025.svg'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/crafted/widgets/lists' title={intl.formatMessage({id: 'WIDGET.LISTS'})}hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/statistics' title={intl.formatMessage({id: 'WIDGET.STATISTICS'})} hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/charts' title={intl.formatMessage({id: 'WIDGET.CHARTS'})} hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/mixed' title={intl.formatMessage({id: 'WIDGET.MIXED'})} hasBullet={true} />
      </SidebarMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-4 ls-1'>{intl.formatMessage({id: 'MENU.APPS'})}</span>
        </div>
      </div>
      <SidebarMenuItem
        to='/apps/user-management/users'
        icon='/media/icons/duotune/general/gen051.svg'
        title={intl.formatMessage({id: 'USER.USERMANAGEMENT'})}
        fontIcon='bi-layers'
      />
    </>
  )
}

export {SidebarMenuMain}
