import {Link} from 'react-router-dom'
import clsx from 'clsx'
import {KTSVG} from '../../../helpers'
import {useLayout} from '../../core'
import {useIntl} from 'react-intl'

const SidebarLogo = () => {
  const intl = useIntl()

  const {config} = useLayout()
  const appSidebarDefaultMinimizeDesktopEnabled =
    config?.app?.sidebar?.default?.minimize?.desktop?.enabled
  const appSidebarDefaultCollapseDesktopEnabled =
    config?.app?.sidebar?.default?.collapse?.desktop?.enabled
  const toggleType = appSidebarDefaultCollapseDesktopEnabled
    ? 'collapse'
    : appSidebarDefaultMinimizeDesktopEnabled
    ? 'minimize'
    : ''
  const toggleState = appSidebarDefaultMinimizeDesktopEnabled ? 'active' : ''
  const appSidebarDefaultMinimizeDefault = config.app?.sidebar?.default?.minimize?.desktop?.default
  return (
    <div className='app-sidebar-logo px-6' id='kt_app_sidebar_logo'>
      <Link to='/dashboard'>
        {config.layoutType === 'dark-sidebar' ? (
          <p style={{marginTop: "1.5rem", color: 'white'}} className='h-25px app-sidebar-logo-default'>
            {intl.formatMessage({id: 'NAME.MEDIUM'})}
          </p>
        ) : (
          <div style={{marginTop: "1.5rem", color: 'white'}}>
            <p className='h-25px app-sidebar-logo-default theme-light-show'>
              {intl.formatMessage({id: 'NAME.MEDIUM'})}
            </p>
            <p className='h-25px app-sidebar-logo-default theme-dark-show'>
              {intl.formatMessage({id: 'NAME.MEDIUM'})}
            </p>
          </div>
        )}
        <div style={{marginTop: "0.6rem", textAlign: 'center'}}  className='h-20px app-sidebar-logo-minimize'>
          <p style={{color: 'white'}}>
            {intl.formatMessage({id: 'NAME.SMALL'})}
          </p>
        </div>
      </Link>

      {(appSidebarDefaultMinimizeDesktopEnabled || appSidebarDefaultCollapseDesktopEnabled) && (
        <div
          id='kt_app_sidebar_toggle'
          className={clsx(
            'app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate',
            {active: appSidebarDefaultMinimizeDefault}
          )}
          data-kt-toggle='true'
          data-kt-toggle-state={toggleState}
          data-kt-toggle-target='body'
          data-kt-toggle-name={`app-sidebar-${toggleType}`}
        >
          <KTSVG path='/media/icons/duotune/arrows/arr079.svg' className='svg-icon-2 rotate-180' />
        </div>
      )}
    </div>
  )
}

export {SidebarLogo}
