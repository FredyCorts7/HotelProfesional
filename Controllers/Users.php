<?php
    class Users extends Controllers {
        public function __construct() {
            parent::__construct();
        }

        function obtenerTipoDocumentos() {
            $data = $this->model->obtenerTipoDocumentos();
            if (is_array($data)) echo json_encode($data);
            else echo $data;
        }
    }