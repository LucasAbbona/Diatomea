import { Link } from "react-router-dom"

const BtnSections = ({ path, text, condition }) => {
  return (
    <Link to={path} className="">
      <button className={`cursor-pointer text-center w-full lg:w-64 py-2 px-2.5 rounded-t-md border-2 border-secondary-darkBrown text-primary-darkGrey text-lg font-medium ${condition ? 'bg-secondary-darkBrown' : 'bg-bg-page outline-secondary-darkBrown  ring-0'}`}>
        {text}
      </button>
    </Link>
  )
}

export default BtnSections