//
//
// import {
//     keyframes,
//     Loader,
//     Flex,
//     Stack,
//     Box,
//     Card,
//     Text,
//     Image,
//
// } from "@mantine/core";
// import useSWR from "swr";
// import { GiMusicalNotes } from "react-icons/gi";
//
// const spin = keyframes`
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// `;
//
// export default function MusicRecentTrack() {
//     const fetcher = (url) => fetch(url).then((r) => r.json());
//     const { data } = useSWR("/api/Spotify/SpotifyGetRecentTracks", fetcher);
//
//
//         return(
//             <Grid>
//             <Card>
//                 <Card.Section>
//                     {data?.isPlaying ?
//                         <Loader variant={"bars"}> </Loader>:
//                         <Box>
//                             <Image
//                                 mr={1.5}
//                                 src={data?.album_img_url}
//                                 alt={data?.album}
//                             />
//                             <Card href={data?.song_url}>
//                                 <Box>
//                                     <Flex direction="column">
//                                         <Text>
//                                             {data?.title}
//                                         </Text>
//
//                                         <Text>
//                                             by {data?.artist}
//                                         </Text>
//                                     </Flex>
//                                 </Box>
//                             </Card>
//                         </Box>
//                         }
//                 </Card.Section>
//             </Card>
//             </Grid>
//         )
// }