import React from "react"
import { Link } from "gatsby"





const ProjectCard = props => (
  
    <li className={props.classes + " reveal-fx reveal-fx--translate-up "}>
        <Link className=" card-v9" to={ "/work/" + props.url} style={{
          backgroundImage: `url(${props.cover})`
        }}>
            <div class="card-v9__content padding-md adv-gallery-v3__img-link">
                <div class="padding-bottom-xxxl max-width-xxs">
                    <p class="color-contrast-higher margin-bottom-xxs text-lg">{props.title}</p>
                    <a id="card-title-2" class="text-lg color-contrast-higher text-underline" >Read now ➞</a>
                </div>
            </div>

        {/* <img className="block width-100%" src={props.cover} alt={props.client} /> */}
        </Link>
    </li>
);

export default ProjectCard