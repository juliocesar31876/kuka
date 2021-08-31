
const initialState = {
    estado: "",
    perfil: {}
}

export default (state, action) => {
    if (!state) {
        return initialState;
    }
    if (action.component == "glup") {
        switch (action.type) {
            case "getAll":
                getAll(state, action);
                break;
            case "getAllFecha":
                getAllFecha(state, action);
                break;
            case "getById":
                getById(state, action);
                break;
            case "verificarGlup":
                verificarGlup(state, action);
                break;
            case "movimientos":
                movimientos(state, action);
                break;
            case "movimiento_global":
                movimiento_global(state, action);
                break;
            case "denegarGlup":
                denegarGlup(state, action);
                break;
            case "cambiarEstadoDatoUsuarioGlupAll":
                cambiarEstadoDatoUsuarioGlupAll(state, action);
                break;
        }
        if (action.estado == "error") {
            state.error = action.error;
        }
        state = { ...state };
    }
    return state;
}

const getAll = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        if (!state.data) {
            state.data = {}
        }
        action.data.map((obj, key) => {
            state.data[obj.key] = obj;
        });
    }
}

const getAllFecha = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        if (!state.dataGlupFecha) {
            state.dataGlupFecha = {}
        }
        action.data.map((obj, key) => {
            state.data[obj.key] = obj;
        });
    }
}

const getById = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        if (!state.perfil) {
            state.perfil = {}
        }
        state.perfil[action.data.key] = action.data;
    }
}

const verificarGlup = (state, action) => {
    state.estado = action.estado;
}
const denegarGlup = (state, action) => {
    state.estado = action.estado;
}

const movimientos = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        if (!state.data) {
            state.data = {}
        }
        if (!state.data[action.data.key]) {
            state.data[action.data.key] = {}
        }
        state.data[action.data.key] = action.data
    }
}
const movimiento_global = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        if (!state.data) {
            state.data = {}
        }
        if (!state.data[action.data.key]) {
            state.data[action.data.key] = {}
        }
        state.data[action.data.key] = action.data
    }
}

const cambiarEstadoDatoUsuarioGlupAll = (state, action) => {
    //state.estado = action.estado
    if (action.key) {
        Object.keys(state.data[action.key]).map((key) => {
            state.data[action.key][key].estado = action.estado;
        })
    }
}
