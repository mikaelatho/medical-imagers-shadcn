/* EXPLORE PAGE */
// below is where you import components and props/states to use
import { Button } from "@/components/ui/button";
import Link from "next/link";

// below is the page contents
export default function Explore() {
  return (
    <main>
      {/*main page content (edit in div below)*/}
      <div className="items-center justify-center mx-auto max-w-7xl flex-auto min-h-screen">
        <Button variant="secondary">Explore</Button>
        <br></br>
        <div>
          <p className="text-wrap break-words sm:text-pretty">this is the Explore page!</p>
          <p className="text-wrap break-words sm:text-pretty">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum sodales mauris at commodo. Phasellus porta dapibus leo eget vulputate. Aliquam rhoncus cursus consequat. Donec dapibus cursus felis, quis malesuada sapien posuere quis. Aenean finibus mi vel interdum imperdiet. Cras sit amet urna neque. Pellentesque volutpat, neque eget dapibus tincidunt, ligula orci rhoncus ipsum, id pulvinar metus ante consequat tellus. Nullam porttitor nunc eget odio feugiat, id volutpat neque facilisis. 
            Aliquam finibus aliquam augue, at euismod felis euismod sit amet. Integer porttitor ante est, quis pellentesque risus ultricies ut. Nam blandit sed enim et tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut in mollis orci. Aliquam viverra tincidunt lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
      </div>
    </main>
  );
}
