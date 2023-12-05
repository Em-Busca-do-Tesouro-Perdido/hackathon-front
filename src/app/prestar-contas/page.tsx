import Image from 'next/image'

const lista = [
	{
		"beneficiario": "06.554.026/0001-68 - MUNICIPIO DE ARRAIAL",
		"emenda_parlamentar": "202337880010-ELMANO FÉRRER",
		"documento_habil": "2023NME000029703",
		"valor": "R$ 1.600.000,00",
		"transferencia": "Em Processo",
		"aprovacao_fiscalizacao": 1,
	},
	{
		"beneficiario": "15.023.914/0001-45 - MUNICIPIO DE ARAPUTANGA",
		"emenda_parlamentar": "202340470009-NELSON BARBUDO",
		"documento_habil": "2023NME000029800",
		"valor": "R$ 1.000.000,00",
		"transferencia": "Em Processo",
		"aprovacao_fiscalizacao": 1,
	},
	{
		"beneficiario": "46.578.498/0001-75 - MUNICIPIO DE ITANHAEM",
		"emenda_parlamentar": "202341320009-TABATA AMARAL",
		"documento_habil": "2023NME000029860",
		"valor": "R$ 160.000,00",
		"transferencia": "29/11/2023",
		"aprovacao_fiscalizacao": 2,
	}
]

export default function PrestarContas() {
	return (
		<main className="flex min-h-screen w-full flex-col justify-items-start md:p-20 p-4 bg-white boxPretty">
			<div className="flex flex-col mb-10">
				<h4 className='text-4xl text-black'>
					Prestação de Contas
				</h4>
				<p className='text-black'>
					Aprovação do relatório de gestão e da prestação de contas do uso do recursos concedidos pelas transferências especiais pelos devidos órgãos de fiscalização.
				</p>
			</div>
			<div className="flex flex-col programFilter">
				<div className='topContent'>
					<p className='text-black mb-4'>
						Dados do Programa
					</p>
				</div>
				<div>
					<form>
						<div>
							<label htmlFor="orgao">
								Órgão
							</label>
							<select name="orgao" id="orgao">
								<option value="1"></option>
								<option value="2">235876 - Ministério da Economia</option>
								<option value="3">308800 - Ministério da Fazenda</option>
							</select>
						</div>
						<div>
							<label htmlFor="programa">
								Programa
							</label>
							<select name="programa" id="programa">
								<option value="1"></option>
								<option value="2">09032023-2</option>
								<option value="3">09032023</option>
							</select>
						</div>
					</form>
				</div>
			</div>
			<div className="flex flex-col">
				<p className='font-bold text-black my-8'>
					Relatórios de gestão e prestação de contas aprovados pelos órgãos de fiscalização.
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
								Status
							</div>
							<div className="cell">
								Aprovação da Fiscalização
							</div>
						</div>

						{
							lista.map((item, index) => {
								return (
									<div className="row" key={index}>
										<div className="cell" data-title="Name">
											{item.beneficiario}
										</div>
										<div className="cell" data-title="Age">
											{item.emenda_parlamentar}
										</div>
										<div className="cell" data-title="Occupation">
											{item.documento_habil}
										</div>
										<div className="cell" data-title="Location">
											{item.valor}
										</div>
										<div className="cell" data-title="Transferencia">
											{item.transferencia}
										</div>
										<div className="cell" data-title="Transferencia">
											{
												item.aprovacao_fiscalizacao === 1 ? (
													<>
														Não recebida
													</>
												) : (
													<div className='flex items-center'>
														<p className='mr-10'>
															Aprovada
														</p>
														<Image src="https://ik.imagekit.io/abkvohwfl/Icone%20do%20Tesouro_tqit3qVWO.png" alt="check" width={40} height={40} />
													</div>
												)
											}
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</main>
	)
}
