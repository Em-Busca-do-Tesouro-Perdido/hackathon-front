import Image from 'next/image'

export default function Status() {
	return (
		<main className="flex min-h-screen w-full flex-col justify-items-start md:p-20 p-4 bg-white boxPretty">
			<div className="flex flex-col mb-10">
				<h4 className='text-4xl text-black'>
					Status das Transferências Especiais
				</h4>
				<p className='text-black'>
					Acompanhamento do status de processo das transferências especiais
				</p>
			</div>
			<div className="flex flex-col">
				<div>
					<p className='font-bold text-black mb-4'>
						Consulte o processo de uma transferência especial
					</p>
				</div>
				<div className='mb-6'>
					<form className='flex searchMagnify'>
						<div>
							<input type="text" placeholder="Insira aqui o código da proposta" />
							<button type="submit">
								<Image src="https://ik.imagekit.io/abkvohwfl/magnifying-glass_qrZFQtU05.png" alt="Search" width={40} height={40} />
							</button>
						</div>
					</form>
				</div>
				<div className='flex'>
					<div className='transferContent'>
						<div>
							<p>
								Status da Proposta com o Código: 
							</p>
							<p>
								09032023-037952
							</p>
						</div>
						<div>
							<p>
								Programa: 
							</p>
							<p>
								09032023
							</p>
						</div>
						<div>
							<p>
								Emenda Parlamentar:
							</p>
							<p>
								202340460007-Mauro Benevides Filho
							</p>
						</div>
						<div>
							<p>
								Beneficiário:
							</p>
							<p>
								23555170000138 - ACARAPE
							</p>
						</div>
						<div>
							<p>
								Valor:
							</p>
							<p>
								R$ 600.000,00
							</p>
						</div>
					</div>
				</div>
				<div className='flex items-center'>
					<div className='w-full'>
						<ul className="stepper">
							<li>
								<a className="pasted-element">1</a>
							</li>
							<li>
								<a className="pasted-element">2</a>
							</li>
							<li>
								<a className="pasted-element">3</a>
							</li>
							<li>
								<a className="pasted-element">4</a>
							</li>
							<li>
								<a>5</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	)
}
