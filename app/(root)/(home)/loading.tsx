import { Skeleton } from "@/components/ui/skeleton"


const loading = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-cols">
      <section className="nav-padding w-full">
        <Skeleton className="w-full h-[274px] rounded-lg" />
      </section>
      <section className="mt-6 flex w-full flex-col sm:mt-20">
        <Skeleton className="w-56 h-10" />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          <Skeleton className="w-full h-[440px] sm:w-[356px]" />
          <Skeleton className="w-full h-[440px] sm:w-[356px]" />
          <Skeleton className="w-full h-[440px] sm:w-[356px]s" />
        </div>
      </section>
    </main>
  )
}

export default loading