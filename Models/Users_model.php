<?php
    class Users_model extends Connection {
        public function __construct() {
            parent::__construct();
        }

        function obtenerTipoDocumentos() {
            return $this->db->select('*', 'tipo_documento', '', '');
        }
    }