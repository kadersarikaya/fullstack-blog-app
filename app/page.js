import CategoryList from '@/components/CategoryList'
import Image from 'next/image'
import CardList from '@/components/CardList'
export default function Home({searchParams}) {
  
  const page = parseInt(searchParams.page) || 1;

  return (
    <main className="mt-8 px-7 lg:px-32">
      <div className="flex flex-col justify-center">
        <div className="lg:flex mt-10 mx-auto">
          <Image src="/assets/image.png" width={700} height={700} />
          <div className="flex flex-col">
            <div className="mt-10 py-4 lg:p-10 space-y-6">
              <h1 className="text-3xl font-bold">Welcome to your blog</h1>
              <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
              <button className="w-auto border border-gray-200 text-gray-700 hover:bg-slate-100 bg-slate-50 rounded-md px-5 py-3 text-2xs inline-block my-12">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold my-8">Popular Categories</h2>
            <CategoryList page={page} />
        </div>
        <div className="lg:flex justify-between">
          <div className="flex flex-col mt-6 lg:w-1/2">
            <h2 className="text-2xl font-bold my-8">Latest Posts</h2>
            <CardList page={page} />
          </div>
          <div className="flex flex-col lg:px-20 justify-center mt-6 lg:w-1/3">
            <div className="py-8">
              <span>What's hot</span>
              <h2 className="text-2xl font-semibold" >Most Popular</h2>
            </div>
            <div className="space-y-8">
              <div className="">
                <button className="rounded-3xl bg-orange-200 text-white px-3">Travel</button>
                  <p className="font-semibold py-2 font-serif">A Journey Through Bohemian Beauty:
                    The Best of Prague
                  </p>
                  <div className="flex text-sm">
                    <p className="">Joseph Owen - </p>
                    <p className="text-gray-400">10.08.2023</p>
                  </div>
              </div>
              <div className="">
                <button className="rounded-3xl bg-pink-200 text-white px-3">
                  Business
                </button>
                  <p className="font-semibold py-2 font-serif">
                    Business Travel: The Best Hotels for
                    Your Stay
                  </p>
                  <div className="flex text-sm">
                    <p className="">
                       Katarina Smith - </p>
                    <p className="text-gray-400">15.07.2022</p>
                  </div>
              </div>
              <div className="">
                <button className="rounded-3xl bg-purple-200 text-white px-3">
                  Lifestyle
                </button>
                  <p className="font-semibold py-2 font-serif">
                    The Best Ways to Enjoy a Healthy
                    Lifestyle
                  </p>
                  <div className="flex text-sm">
                    <p className="">
                      Karen Smith - 
                    </p>
                    <p className="text-gray-400">10.04.2023</p>
                  </div>
              </div>
            </div>
             <div className="py-8 mt-5">
              <span>Discover by topics</span>
              <h2 className="text-2xl font-semibold pb-5" >Categories</h2>
              <CategoryList />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}