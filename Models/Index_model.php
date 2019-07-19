<?php
    class Index_model extends Connection {
        public function __construct() {
            parent::__construct();
        }

        public function obtenerHabitaciones() {
            return $this->db->select('*', 'habitaciones', '', '');
        }

        public function obtenerHabitacion($idRoom) {
            $where = 'idhabitaciones = :idRoom';
            $param = array('idRoom' => $idRoom);
            return $this->db->select('*', 'habitaciones', $where, $param);
        }
    }