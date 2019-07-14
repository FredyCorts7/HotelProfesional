<?php
    class Session {
        static function startSession() {
            @session_start();
        }

        static function getSession($name) {
            return $_SESSION[$name];
        }

        static function setSession($name, $data) {
            return $_SESSION[$name] = $data;
        }

        static function closeSession() {
            @session_destroy();
        }
    }