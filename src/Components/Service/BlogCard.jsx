import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Blogcard({blog}) {
  return (
    <Card sx={{width:"100%",borderRadius:"20px",cursor:"pointer",textAlign:"start",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px"}}>
      <CardMedia
        sx={{ height: 220,borderRadius:"20px",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px" }}
        image={blog.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" sx={{fontWeight:"bold",fontSize:{xs:"120%",md:"165%"},}} component="div">
        {blog.title}
        </Typography>
        <Typography variant='p' sx={{display:"block",marginBottom:"20px"}}>{blog.date}</Typography>
        <Typography variant="body2" color="text.secondary">
      {blog.desc.toString().substring(0,100)+"...."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' sx={{backgroundColor:"white",border:"2px solid #6E23F8",color:"black",borderRadius:"5px",marginBottom:"10px"}}>Read Article</Button>
      </CardActions>
    </Card>
  );
}