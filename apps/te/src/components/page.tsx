import { lazy, Suspense } from 'react'

const LazyComponent = lazy(()=> import('./loading'))

export const Page = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <LazyComponent/>
    </Suspense>
  )
}
