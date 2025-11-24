
import Section1 from "./components/section 1/Section1"

const App = () => {

  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, possimus. Officia aliquam quam inventore nemo!",
      tag: "Satiesfied",
      color: "blue"
    },
    {
      img: "https://i.pinimg.com/736x/e1/4a/83/e14a8371f954ca9c153ba39cb4af9b87.jpg",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste expedita molestiae sapiente eius magnam.",
      tag: "Underserved",
      color: "blue"
    },
    {
      img: "https://media.istockphoto.com/id/1746066866/photo/smiling-woman-using-digital-tablet-at-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=nxr5e9_EDpy9Yu_C4-AtL4zl0NnGAojZ4gz6G13gq5U=",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quam ea nobis accusantium recusandae assumenda.",
      tag: "Underbanked",
      color: "green"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661674083830-5fa7e869db68?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cupiditate odit quasi, numquam vero porro.",
      tag: "Prosperous",
      color:"blue"
    },
    {
      img: "https://media.istockphoto.com/id/697247552/photo/young-business-woman-reading-report-in-office.jpg?s=612x612&w=0&k=20&c=rgB2W3_Aguxn7U9UEudW9CuJKkdx-8y_XNP1BF4hmGU=",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sed aut modi magni doloribus perspiciatis.",
      tag: "Emerging",
      color: "green"
    }
  ]


  return (
    <div className="overflow-y-hidden ">
      <Section1 users={users} />
    </div>
  )
}

export default App