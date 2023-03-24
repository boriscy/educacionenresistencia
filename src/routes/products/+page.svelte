<script lang="ts">
	console.log("Productos")
</script>

<h1 class="lg:text-6xl font-thin text-center text-slate-900">Productos</h1>

<hr class="my-4" />
<div class="product">
	<h2 class="title">Pensamientos</h2>
	<h3 class="author">René Gómez-García Olguín</h3>

	<div class="description">
		<div class="w-2/5 float-left mr-2 mb-1 relative">
			<div class="price absolute top-0 text-white">
				<span class="number">50</span>
				<span class="symbol">Bs.</span>
			</div>

			<img src="images/libro-pensamientos.jpg" class="img" title="Pensamientos" />
			<div class="detail absolute bottom-0">
				Libro de 234 páginas falso cosido artesanal, tapa de cartulina, con fotografías de cuadros
				tejidos en el interior
			</div>
		</div>

		<p>
			Ésta es una compilación de los artículos de mi abuelo, que fueron enviados al periódico
			PRESENCIA por él durante su exilio en Venezuela, entre 1981 y 1984, en la época en la que yo
			aún no había nacido. Murió cuando yo cumplí un año. Lo conozco a partir de estos escritos, que
			algo dicen de este hombre que nació en Itapaya, un 24 de julio de 1925, y llegó alguna vez a
			ser Gerente del Banco Central de Bolivia, pero que también fue preso político en el campo de
			concentración San Joaquín y en la cárcel de Chonchocoro. Todo por su militancia política y su
			gran capacidad intelectual y moral que no le permitían traicionarse a sí mismo.
		</p>
	</div>
</div>

<style>
	.product {
		@apply relative shadow-lg py-4 rounded-xl;
	}
	.product .title {
		@apply text-4xl font-semibold text-slate-700;
	}
	.product .author {
		@apply italic font-semibold;
	}
	.product .description {
		@apply text-slate-700 flex-auto;
	}
	.product .price {
		@apply m-2 p-2 rounded-lg;
		background: rgba(10, 10, 10, 0.3);
	}
	.product .price .number {
		@apply text-5xl text-gray-100;
	}
	.product .price .symbol {
		@apply text-2xl text-gray-300;
	}
	.product .img {
		@apply w-full;
	}

	.product .detail {
		@apply text-sm italic px-2 py-1 text-gray-200;
		background: rgba(0, 0, 0, 0.3);
	}
</style>
