import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CardItem.css";

export default function CardItem({ productDetails }) {
  const { id, title, category, price, img, desc } = productDetails;

  function onClickHandler() {
    console.log("dd");
  }

  return (
    <>
      <Card className="CardItem">
        <CardMedia image={img} title={title} className="pictire-container" />
        <CardContent>
          <Typography
            className="card-item-name"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            className="card-item-description"
            variant="body2"
            color="text.secondary"
          >
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={onClickHandler} size="small">
            Add To Card
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
