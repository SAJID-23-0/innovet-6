import BlogItems from "./BlogItems";

const Blog = () => {
  return (
    <section className=" py-24 relative">
      <div className="container">
        <div className=" w-fit m-auto">
          <h2 className="text-[#141135] font-open font-bold text-5xl mb-16">
            You May Also Like
          </h2>
          <BlogItems src="/blog img 1.png" className=" mb-14">
            Punto Pago Allows Quick And Secure Payments For Services In Panama
          </BlogItems>
          <BlogItems src="/blog img 1.png" className=" mb-14">
            Punto Pago Allows Quick And Secure Payments For Services In Panama
          </BlogItems>
          <BlogItems src="/blog img 1.png">
            Punto Pago Allows Quick And Secure Payments For Services In Panama
          </BlogItems>
        </div>
      </div>
      <div className=" absolute bottom-0 left-0 -z-10">
        <img src="/blog vector.png" alt="blog vector" />
      </div>
    </section>
  );
};

export default Blog;
