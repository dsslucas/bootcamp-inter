select * from Clientes
select * from Produtos
select * from Pedido
select * from PedidoItem

select *,
	case
		when TipoPessoa = 'J' then 'Jur�dica'
		when TipoPessoa = 'F' then 'F�sica'
		else 'Pessoa indefinida'
	end
	from Clientes
