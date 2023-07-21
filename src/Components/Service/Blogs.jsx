import { Box, Stack, Typography } from "@mui/material"
import first from "../../assets/images/first.jpg";
import second from "../../assets/images/second.jpg";
import third from "../../assets/images/third.jpg";
import Blogcard from "./BlogCard";
 const Blogs=()=>{
    const blogs=[
        {
            title:"AI and Medical",
            desc:"AI has had a significant impact on the field of medical writing. Medical writing involves the creation of scientific documents and materials related to the medical and healthcare industries, such as research papers, clinical trial reports, regulatory documents, educational materials, and marketing content."+"\nHere are some ways in which AI has influenced medical writing: Data analysis and interpretation: AI algorithms can process and analyze large volumes of medical data, including clinical trial results, patient records, and research studies. This capability helps medical writers in interpreting complex data and incorporating it into their documents accurately.",
            image:first,
            date:"14 July 2023",
            
        },
        {
            title:"AI and Medical",
            desc:"AI has had a significant impact on the field of medical writing. Medical writing involves the creation of scientific documents and materials related to the medical and healthcare industries, such as research papers, clinical trial reports, regulatory documents, educational materials, and marketing content."+"\nHere are some ways in which AI has influenced medical writing: Data analysis and interpretation: AI algorithms can process and analyze large volumes of medical data, including clinical trial results, patient records, and research studies. This capability helps medical writers in interpreting complex data and incorporating it into their documents accurately.",
            image:second,
            date:"12 July 2023",
            
        },
        {
            title:"AI and Medical",
            desc:"AI has had a significant impact on the field of medical writing. Medical writing involves the creation of scientific documents and materials related to the medical and healthcare industries, such as research papers, clinical trial reports, regulatory documents, educational materials, and marketing content."+"\nHere are some ways in which AI has influenced medical writing: Data analysis and interpretation: AI algorithms can process and analyze large volumes of medical data, including clinical trial results, patient records, and research studies. This capability helps medical writers in interpreting complex data and incorporating it into their documents accurately.",
            image:third,
            date:"15 July 2023",
            
        },
        {
            title:"AI and Medical",
            desc:"AI has had a significant impact on the field of medical writing. Medical writing involves the creation of scientific documents and materials related to the medical and healthcare industries, such as research papers, clinical trial reports, regulatory documents, educational materials, and marketing content."+"\nHere are some ways in which AI has influenced medical writing: Data analysis and interpretation: AI algorithms can process and analyze large volumes of medical data, including clinical trial results, patient records, and research studies. This capability helps medical writers in interpreting complex data and incorporating it into their documents accurately.",
            image:third,
            date:"15 July 2023",
            
        }
    ]
return (

    <Box sx={{margin:"20px auto",width:{xs:"90%",md:"75%"},textAlign:"center"}}>
     <Typography  variant="h4" sx={{marginBottom:"10px"}}>Blogs Section</Typography>
     <Typography  variant="p" sx={{display:"block",marginBottom:"30px"}}>Read the articles written by our Expert Writers </Typography>
     <Stack direction={{xs:"column",md:"row"}} spacing={3} sx={{justifyContent:'space-between',alignItems:'center',flexWrap:"wrap",}}>
        {blogs.map(blog=>{
            return(
                <Box flex={1}>
                    <Blogcard blog={blog}/>
                </Box>
            )
        })}
     </Stack>
     <Stack></Stack>
    </Box>
)
}
export default Blogs