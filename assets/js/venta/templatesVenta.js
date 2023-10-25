const templateVentaCompleta = `
<table class="tableCatalogo">
        <tr>
            <th></th>
            <th>#</th>
            <th>Título</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
        </tr>
        ###ITEMS###
        <tr>
            <td colspan="4">Total</td>
            <td>###CANTIDAD_FINAL###</td>
            <td>###TOTAL_FINAL###</td>
        </tr>
    </table>
`;
const templateVentaItem     = `
<tr>
    <td>
        <a href="#" class="linkEliminarJuego" ###ELIMINAR###>
            <i class="fa fa-window-close" aria-hidden="true"></i>
        </a>
    </td>
    <td>###NUMERO###</td>
    <td>###TITULO###</td>
    <td>###PRECIO###</td>
    <td>###CANTIDAD###</td>
    <td>###TOTAL###</td>
</tr>
`;