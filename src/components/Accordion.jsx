import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
const AccordionComponenet = ({title, description}) => {
    const [Expanded,setExpand] = useState(false)

    return (
        <>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={Expanded ? {backgroundColor:''} : {backgroundColor:'#D9D6D2'}}
                    onClick={()=>setExpand((prev)=>!prev)}
                >
                    <Typography className=' text-primary-darkGrey' style={{fontWeight:'600'}}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='px-10'>
                        {description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default AccordionComponenet