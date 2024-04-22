import { modalFont, titleFont } from "@/config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`mt-3 ${ className }`}>
      <h1 className={ ` ${ modalFont.className } antialiased text-3xl font-semibold my-3` }>
        { title }
      </h1>
      {
        subtitle && (
          <h3 className={`${ modalFont.className } text-xl mb-5`}>{ subtitle }</h3>
        )
      }
    </div>
  )
}