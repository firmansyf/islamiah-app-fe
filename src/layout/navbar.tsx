import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {Slash} from 'lucide-react'
import {Toggle} from '@/components/ui/toggle'
import {setOpenSidenav, useLayoutController} from '@/context'
import {useLocation} from 'react-router-dom'
import {Bars3Icon} from '@heroicons/react/16/solid'

export function Navbar() {
  const [controller, dispatch] = useLayoutController()
  const {openSidenav} = controller
  const {pathname} = useLocation()
  const [layout, _] = pathname.split('/').filter((el) => el !== '')

  return (
    <nav className='rounded-xl bg-[#fefee3] translate-all sticky top-4 z-40 p-5 shadow-md shadow-blue-gray-500/5 mb-4'>
      <div className='flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center'>
        <div className='capitalize'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/' className='font-semibold text-[#d68c45]'>
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className='text-[#2c6e49]'>
                {layout !== undefined && <Slash />}
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink className='text-[#d68c45]'>
                  {layout !== undefined ? layout : ''}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className='flex items-center sm:justify-between'>
          <Toggle
            className='grid xl:hidden lg:mx-4'
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className='h-6 w-6 text-blue-gray-500' />
          </Toggle>
        </div>
      </div>
    </nav>
  )
}

Navbar.displayName = '/src/widgets/layout/dashboard-navbar.jsx'
export default Navbar
