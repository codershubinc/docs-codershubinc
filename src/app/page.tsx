'use client'
import CardComp from "@/lib/cardComp/cardComp";
import DocTitle from "@/lib/docTitle/docTitle";
import PageUi from "@/lib/pageUi/PageUi";
import '@/app/css/fonts/fonts.css'



export default function Home() {
  const arrayOfContentsOfDocs = [
    {
      title: "Python",
      content: "Python is a high-level, interpreted, general-purpose programming language.",
      className: 'font-playwrite hover:rounded-3xl ',
      contentFont: 'text-xl text-left font-ubuntu',
      titleFont:'font-Syne_Mono '
    },
    {
      title: "Javascript",
      content: "JavaScript is a high-level, interpreted, object-oriented scripting language.",
      className: 'font-playwrite hover:rounded-3xl ',
      contentFont: 'text-xl text-left font-ubuntu',
      titleFont:'font-Syne_Mono '
    },
    {
      title: "Java",
      content: "Java is a high-level, class-based, object-oriented programming language.",
      className: 'font-playwrite hover:rounded-3xl ',
      contentFont: 'text-xl text-left font-ubuntu',
      titleFont:'font-Syne_Mono '
    },
    {
      title: "C++",
      content: "C++ is a general-purpose, object-oriented programming language.",
      className: 'font-playwrite hover:rounded-3xl ',
      contentFont: 'text-xl text-left font-ubuntu',
      titleFont:'font-Syne_Mono '
    }
  ]
  return (
    <PageUi>
      <DocTitle
        title="docs-codershubinc.vercel.app"
        className=" font-bold text-center bg-black h-max pb-2 font-Delius_Unicase"
        textStyle="text-white lg:text-4xl  "
      />
      <p className="font-Roboto_Slab text-2xl lg:text-4xl mx-auto px-3 border border-solid border-slate-800 rounded-3xl w-max hover:bg-slate-900 cursor-pointer">
        {` Coder's Hub INC. NetWork`}
      </p>
      <CardComp
        contentArray={arrayOfContentsOfDocs}
      />
      <p
        className="font-roboto"
      >
        roboto font testing
      </p>
      <p
        className="margarine-regular text-3xl"
      >
        Margarin font testing
      </p>


    </PageUi>
  );
}
