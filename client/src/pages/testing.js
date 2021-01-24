import Banner from '../components/Banner'
import '../components/Banner/style.css'
import Subject from '../components/Subjects'

/**
 * 
 * file is used to test adjusting user display to user profile. Can be changed. 
 */
const testing = (subtopicList) => {
    let list = subtopicList;
return ( 
    <>
    <Banner text="Practice" color='#4CAF50'></Banner>
    <div style={{margin:'0 20%'}}>
        {console.log(list)}
        {subtopicList.map((value,index)=> {
                return <Subject text={value} color='#F39317'></Subject>
            })}
    </div>
    </>
)
    }


export default testing