select * from Clientes
select * from Produtos
select * from Pedido
select * from PedidoItem

select *,
	case
		when TipoPessoa = 'J' then 'Jurídica'
		when TipoPessoa = 'F' then 'Física'
		else 'Pessoa indefinida'
	end
	from Clientes
