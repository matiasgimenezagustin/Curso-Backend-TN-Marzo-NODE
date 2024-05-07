--------------------------------------------------------------------------------
{{}} = interpolar con logica / sintaxis de hanldebars

--------------------------------------------------------------------------------
{{this}} = acceder a el objeto props

--------------------------------------------------------------------------------
{{#if}}
    <div> </div>
{{/if}} = Condicionar con hanldebars

--------------------------------------------------------------------------------
{{#if}}

{{else}}

{{/if}} = ternario o condicion IF ELSE

--------------------------------------------------------------------------------

{{#each array (nombre de la prop que tiene el array)}}
    <div>{{this.name (este name hace referencia al nombre de el objeto del array iterado)}} </div>
{{/each}}