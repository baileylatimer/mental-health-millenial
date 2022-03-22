import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Image from "./pic"




const ProjectCard = props => (
  
    <li className={props.classes + " reveal-fx reveal-fx--translate-up "}>
        <Link className=" card-v9" to={ "/work/" + props.url} >
          <Image className="radius-lg" filename='article-img.jpg' alt="Me pretending to work"/>
            <div class="card-v9__content padding-top-sm adv-gallery-v3__img-link">
                <div class="padding-bottom-sm max-width-xxs">
                    <p class="color-contrast-higher margin-bottom-xxs text-md">{props.title}</p>
                    <a id="card-title-2" class="text-md color-contrast-higher text-underline" >Read now ➞</a>
                </div>
            </div>

        {/* <img className="block width-100%" src={props.cover} alt={props.client} /> */}
        </Link>
    </li>
);

export default ProjectCard