import{Button,makeStyles} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { BannerData } from '../myComponents/constants/Data'
					
const useStyle=makeStyles({
    image:{
        width:'50%',
        height:480,
        marginLeft:'50px'
    }

})

const Banner =()=>{
    const classes=useStyle();
    return(
        <Carousel autoplay={true} animation="slide" navButtonsAlwaysVisible={true} cycleNavigation={true}
            navButtonsProps={{
                style:{
                    background:'#B3A123',
                    color:'white',
                    margin:'50px',
                    marginLeft:'25px',
                    marginRight:'690px',
                }
            }}>
            {
                BannerData.map(image => <img src={image.path} className={classes.image} alt="carouseling"></img>)
            }
        </Carousel>
    )
}


export default Banner;