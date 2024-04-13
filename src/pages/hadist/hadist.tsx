import {FC, useEffect, useState, Fragment} from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {getDataHadist} from '@/services/api'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'

const HadistModule: FC = () => {
  const [data, setData] = useState<any[]>([])
  const [val, setval] = useState(null)

  useEffect(() => {
    getDataHadist()
      .then(({data: res}) => setData(res))
      .catch(() => console.log('Fetching data error'))
  }, [])

  return (
    <>
      <section className='w-full flex flex-col'>
        <Card className='lg:h-[calc(100vh-70px)] sm:h-[100vh] relative'>
          <CardHeader className=' bg-[#4c956c] rounded-md text-[#fefee3]'>
            <CardTitle>Pengertian Hadist</CardTitle>
            <CardDescription className='py-4 px-2 tracking-wide text-[#fefee3]'>
              Hadis adalah segala perkataan, perbuatan, dan persetujuan dari Nabi Muhammad saw. yang
              diriwayatkan oleh para sahabatnya dan dijadikan sumber hukum kedua dalam Islam setelah
              Al-Qur'an. Hadis digunakan sebagai pedoman dalam memahami dan menjalankan ajaran Islam
              sehari-hari, memberikan penjelasan, contoh, dan rincian tambahan terkait ajaran yang
              terdapat dalam Al-Qur'an.
            </CardDescription>
          </CardHeader>
          <CardContent className='flex w-full flex-col gap-1 relative py-7'>
            <div className='flex gap-2 mb-2'>
              {Array.isArray(data) &&
                data.map((item, i: number) => (
                  <div className='w-auto flex items-center gap-2 shadow-md rounded-md' key={i}>
                    <Button
                      size='sm'
                      className='text-[#4c956c]'
                      onClick={() => setval(item.value)}
                      style={{backgroundColor: '#d68c45', color: '#fefee3'}}
                    >
                      {item.name}
                    </Button>
                  </div>
                ))}
            </div>
            {Array.isArray(data) &&
              data.map((item, i: number) => (
                <Fragment>
                  {val === item.value && (
                    <Card key={i} className='w-full h-[25.5rem]'>
                      <CardHeader>
                        {/* <CardTitle>Account</CardTitle> */}
                        <CardDescription className='p-0'>
                          <div className='w-full  border-b-2 py-2'>
                            <Input
                              type='text'
                              placeholder='Cari no hadist'
                              className='w-1/4 sm outline-none ring-white'
                            />
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className='overflow-auto h-[270px]'>
                        <div className='py-2 flex flex-col gap-5'>
                          {item.content?.map((data: string) => (
                            <div className='p-3 rounded-2xl' style={{backgroundColor: '#4c956c'}}>
                              <span className='tracking-normal text-sm w-3/4 flex-shrink text-[#fefee3] font-semibold'>
                                {data}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </Fragment>
              ))}

            {/* {Array.isArray(data) &&
              data?.map((item: any, i: number) => {
                return (
                  <>
                    <div className='flex flex-col flex-wrap gap-20' key={i}>
                      <div className='w-full flex items-center gap-2'>
                        <Button
                          size='sm'
                          className='bg-gray-300'
                          onClick={() => setval(item.value)}
                        >
                          {item.name}
                        </Button>
                      </div>

                      <div
                        className={`w-full flex left-0 border-t-2 absolute overflow-auto`}
                        style={{
                          top: 'calc(100% + 10px)',
                        }}
                      >
                        {val === item.value && (
                          <div className='w-full flex flex-col px-7 mt-2 h-[23rem]'>
                            <div className='w-full  border-b-2 py-2'>
                              <Input
                                type='text'
                                placeholder='Cari no hadist'
                                className='w-1/4 sm outline-none ring-white'
                              />
                            </div>

                            <div className='py-5 flex flex-col gap-5'>
                              {item.content?.map((data: string) => (
                                <div className='bg-green-100 p-3 rounded-2xl'>
                                  <span className='tracking-normal text-sm w-3/4 flex-shrink text-green-700 font-semibold'>
                                    {data}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {val === null && <span>Test</span>}
                      </div>
                    </div>
                  </>
                )
              })} */}
          </CardContent>
        </Card>
      </section>
    </>
  )
}

export {HadistModule}
