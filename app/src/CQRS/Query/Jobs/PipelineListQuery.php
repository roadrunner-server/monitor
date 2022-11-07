<?php

declare(strict_types=1);

namespace App\CQRS\Query\Jobs;

use Spiral\Cqrs\QueryInterface;

/**
 * Get all created jobs plugin pipelines.
 */
final class PipelineListQuery implements QueryInterface
{
    public function __construct(
        public readonly string $server
    ) {
    }
}
