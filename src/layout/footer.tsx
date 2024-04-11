export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='py-2 mt-4'>
      <div className='flex w-full flex-wrap items-center justify-center gap-6 px-2'>
        <span className='text-sm font-semibold text-inherit'>
          &copy; {year} Islamiah Application
        </span>
      </div>
    </footer>
  )
}

Footer.displayName = '/src/layout/footer.jsx'

export default Footer
