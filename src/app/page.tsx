'use client'
import CardComp from "@/lib/cardComp/cardComp";
import DocTitle from "@/lib/docTitle/docTitle";
import PageUi from "@/lib/pageUi/PageUi";



export default function Home() {
  const arrayOfContentsOfDocs = [
    {
      title: "Python",
      content: "Python is a high-level, interpreted, general-purpose programming language.",
      className: 'font-playwrite hover:rounded-3xl ',
      contentFont:'text-xl text-left font-Roboto_Slab'
    },
    {
      title: "Javascript",
      content: "JavaScript is a high-level, interpreted, object-oriented scripting language.",
      className: 'font-playwrite hover:rounded-3xl ',
      contentFont:'text-xl text-left font-Roboto_Slab'
    },
    {
      title: "Java",
      content: "Java is a high-level, class-based, object-oriented programming language.",
      className: 'font-playwrite hover:rounded-3xl ',
      contentFont:'text-xl text-left font-Roboto_Slab'
    },
    {
      title: "C++",
      content: "C++ is a general-purpose, object-oriented programming language.",
      className: 'font-playwrite hover:rounded-3xl ',
      contentFont:'text-xl text-left font-Roboto_Slab'
    }
  ]
  return (
    <PageUi>
      <DocTitle
        title="docs-codershubinc.vercel.app"
        className=" font-bold text-center bg-black h-max pb-2 font-playwrite"
        textStyle="text-white lg:text-4xl  "
      />
      <p className="font-Roboto_Slab text-2xl lg:text-4xl mx-auto px-3 border border-solid border-slate-800 rounded-3xl w-max hover:bg-slate-900 cursor-pointer">
        {` Coder's Hub INC. NetWork`}
      </p>
      <CardComp
        contentArray={arrayOfContentsOfDocs}
      />


    </PageUi>
  );
}
