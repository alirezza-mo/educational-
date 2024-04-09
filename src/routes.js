import ArticlesSection from "./Pages/ArticlesSection/ArticlesSection"
import Index from "./Pages/Index/Index"
import Products from "./Pages/Index/Products/Products"

let Routes = [
  {path:'/' , element: <Index/>},
  {path:'/products' , element: <Products/> } ,
  {path:'/articles' , element: <ArticlesSection/> } ,
]

export default Routes