import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import clsx from "clsx";

export default function ImageComponent ({ src, hash, alt }) {
	const [ imageLoaded, setImageLoaded ] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setImageLoaded(true)
		}
		img.src = src
	}, [ src ]);

	return (
		<div className="imageWrap">
			<div className={ clsx("hash", imageLoaded && "dn") }>
				<Blurhash
					hash={ hash }
					width={ 340 }
					height={ 230 }
					resolutionX={ 32 }
					resolutionY={ 32 }
					punch={ 1 }
				/>
			</div>
			<img
				src={ src }
				alt={ alt }
				loading="lazy"
				className={ clsx("img", !imageLoaded && "dn") }
			/>
		</div>
	)
}