import Image from 'next/image'

export default function Payment() {
	return (
		<main className="flex min-h-screen w-full flex-col justify-items-start md:p-20 p-4 bg-white boxPretty">
			<div className="flex flex-col mb-10">
				<h4 className='text-4xl text-black'>
					Informe de Pagamento
				</h4>
				<p className='text-black'>
					Confirmação de transferências de recursos efetivadas para os beneficiários.
				</p>
			</div>
			<div className="flex flex-col">
				<p className='font-bold text-black mb-4'>
					Ordem de Pagamento em processo de efetivação da transferência de recursos.
				</p>
				<div>
					<div className="table">

						<div className="row header">
							<div className="cell">
								Beneficiário
							</div>
							<div className="cell">
								Emenda Parlamentar
							</div>
							<div className="cell">
								Documento Hábil
							</div>
							<div className="cell">
								Valor
							</div>
							<div className="cell">
								Transferência efetivada
							</div>
						</div>

						<div className="row">
							<div className="cell" data-title="Name">
								15.023.914/0001-45 - MUNICIPIO DE
								ARAPUTANGA
							</div>
							<div className="cell" data-title="Age">
								202340470009-NELSON BARBUDO
							</div>
							<div className="cell" data-title="Occupation">
								2023NME000029800
							</div>
							<div className="cell" data-title="Location">
								R$ 1.000.000,00
							</div>
							<div className="cell" data-title="Transferencia">
								Em Processo
							</div>
						</div>


					</div>
				</div>
			</div>
		</main>
	)
}
