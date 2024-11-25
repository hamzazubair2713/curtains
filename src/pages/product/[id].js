import AboutProduct from "@/components/Service/AboutProduct";
import Hero from "@/components/Service/Hero";
import RelatedProduct from "@/components/Service/RelatedProduct";
import BookAppointment from "@/components/BookAppointment";
import Question from "@/components/Question/Question";
import Testimonials from "@/components/Testimonials";
const product = ({ isData }) => {
  return (
    <>
      <Hero />
      <AboutProduct />
      <RelatedProduct />
      <BookAppointment />
      <Question />
      <Testimonials />
    </>
  );
};
// async function getProduct(id) {
//   try {
//     const res = await fetch();
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.log("The error", err);
//     return null;
//   }
// }

// export async function getServerSideProps({ params }) {
//   const slug = params.id;
//   // const isData = await getProduct(slug);

//   return {
//     props: {
//       isData,
//     },
//   };
// }

export default product;
