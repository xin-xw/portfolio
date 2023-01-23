import { Carousel } from '@mantine/carousel';
import {Image} from '@mantine/core'

export default function AboutCarousel() {
    return (
        <Carousel
            mx="auto"
            height={"auto"}
            styles={{
                control: {
                    '&[data-inactive]': {
                        opacity: 0,
                        cursor: 'default',
                    },
                },
            }}
        >
            <Carousel.Slide>
                <Image src={"/about/carousel/000540970019.jpg"}></Image>
            </Carousel.Slide>
            <Carousel.Slide>
                <Image src={"/about/carousel/000540970008.jpg"}></Image>
            </Carousel.Slide>
            <Carousel.Slide>
                <Image src={"/about/carousel/000540970006.jpg"}></Image>
            </Carousel.Slide>
            <Carousel.Slide>
                <Image src={"/about/carousel/000540970015.jpg"}></Image>
            </Carousel.Slide>
            <Carousel.Slide>
                <Image src={"/about/carousel/000540970007.jpg"}></Image>
            </Carousel.Slide>
            {/* ...other slides */}
        </Carousel>
    );
}