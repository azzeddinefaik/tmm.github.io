<template>
  <div>
  	<article>
    	<nuxt/>		
  	</article>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/_variables.scss';

article {
	max-width: $md;
	font: {
		family: $sans-serif;
	}
	margin: {
		right: auto;
		left: auto;
	}
	padding: {
		right: 1rem;
		left: 1.25rem;
	}

	h1 {
		font: {
			weight: 700;
			family: $sans-serif;
			style: normal;
			size: 2.25rem;
		}
		line-height: 1.1;
		letter-spacing: -.028em;	
	}

	blockquote {
		margin: {
			top: 2rem;
			right: 0;
			bottom: 2rem;
			left: calc(-1rem - 3px);
		}

		padding: {
			top: 4px;
			bottom: 4px;
			left: 1rem;
		}

		border-left: {
			width: 3px;
			color: $black;
			style: solid;
		}

		p {
			font: {
				style: italic;
				family: $sans-serif;
			}
			margin: 0;
		}
	}

	img, video {
	  margin: {
	  	top: 3rem;
	  	right: auto;
	  	bottom: 3rem;
	  	left: auto;
	  };
	  border-radius: 3px;
	  max-width: 100%;
	  display: block;
	}
}
</style>
