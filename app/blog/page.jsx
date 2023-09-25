import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";

const BlogPage = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
    const { cat } = searchParams;

    return (
    <main className="mt-8 px-7 lg:px-32">
        <div className="flex flex-col justify-center">
            <div className="lg:flex justify-between">
                <div className="flex flex-col mt-6 lg:w-1/2">
                    <h2 className="text-2xl font-bold my-8">Blog Posts</h2>
                    <CardList page={page} cat={cat} />
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
                        <CategoryList  />
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
};

export default BlogPage;