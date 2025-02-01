import { ShoppingBag } from "lucide-react"
import { Button } from "@/components"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/ui-shadcn/card"
import Link from "next/link"

export default function EmptyPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md border-none shadow-none bg-transparent">
        <CardHeader>
          <CardTitle className="text-2xl font-light text-center text-gray-800 tracking-wide">
            TU CESTA ESTÁ VACÍA
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          <ShoppingBag className="w-24 h-24 text-gray-400 stroke-[0.5]" />
          <p className="text-center text-gray-600 font-light text-lg max-w-xs">
            Parece que aún no has encontrado tu próximo look favorito
          </p>
        </CardContent>
        <Link href="/">
          <CardFooter>
            <Button className="w-full bg-black hover:bg-gray-800 text-white font-light text-lg py-6 rounded-none transition-colors duration-300">
              Descubrir novedades
            </Button>
          </CardFooter>
        </Link>
      </Card>
    </div>
  )
}